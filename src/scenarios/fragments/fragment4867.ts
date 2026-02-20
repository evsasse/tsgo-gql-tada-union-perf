import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4865 } from "./fragment4865";
import type { FragmentToken4866 } from "./fragment4866";

export const FRAGMENT_4867 = gql(`
  fragment Fragment4867 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult4867 = ResultOf<typeof FRAGMENT_4867>;
type FragmentSelf4867 = NonNullable<FragmentResult4867>;

export type FragmentToken4867 =
  | FragmentSelf4867["__typename"]
  | FragmentSelf4867["typenameHint"] | FragmentToken4865 | FragmentToken4866;
