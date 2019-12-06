<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">

            <table id="marktable" border="1" class="indent">
                <thead>
                    <tr bgcolor="#9acd32">

                        <th>Result</th>
                        <th>Roll No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Programming</th>
                        <th>Web Development</th>
                        <th>Net Working</th>
                        <th>Advance Database</th>

                    </tr>
                </thead>

                <tbody>
                    <xsl:for-each select="/student/class">

                        <tr>
                            <td colspan="8" align="center" style="background-color:	#FFD700;">
                                <b>
                                    <xsl:value-of select="@grade" /></b>
                            </td>
                        </tr>

                        <xsl:for-each select="child">

                            <tr id="{position()}">
                                <td align="center"><input name="item0" type="radio" /></td>
                                <td><xsl:value-of select="rollno" /></td>
                                <td><xsl:value-of select="firstname" /></td>
                                <td><xsl:value-of select="lastname" /></td>
                                <td><xsl:value-of select="programming" /></td>
                                <td><xsl:value-of select="maths" /></td>
                                <td><xsl:value-of select="computer" /></td>
                                <td><xsl:value-of select="history" /></td>
                            </tr>
                            
                        </xsl:for-each>

                    </xsl:for-each>
                </tbody>
            </table>

           <!-- <form class="indent">
                <p>
                    <input type="button" name="btnCalcBill" value="Submit" id="calcBill" />
                    Total Marks:
                    <input type="text" name="txtBillAmt" />
                </p>
                <p id="display"></p>
            </form> -->
    </xsl:template>
</xsl:stylesheet>
