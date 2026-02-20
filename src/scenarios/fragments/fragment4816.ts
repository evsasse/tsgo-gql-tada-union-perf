import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4814 } from "./fragment4814";
import type { FragmentToken4815 } from "./fragment4815";

export const FRAGMENT_4816 = gql(`
  fragment Fragment4816 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult4816 = ResultOf<typeof FRAGMENT_4816>;
type FragmentSelf4816 = NonNullable<FragmentResult4816>;

export type FragmentToken4816 =
  | FragmentSelf4816["__typename"]
  | FragmentSelf4816["typenameHint"] | FragmentToken4814 | FragmentToken4815;
