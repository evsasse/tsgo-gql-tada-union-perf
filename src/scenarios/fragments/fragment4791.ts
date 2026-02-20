import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4789 } from "./fragment4789";
import type { FragmentToken4790 } from "./fragment4790";

export const FRAGMENT_4791 = gql(`
  fragment Fragment4791 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult4791 = ResultOf<typeof FRAGMENT_4791>;
type FragmentSelf4791 = NonNullable<FragmentResult4791>;

export type FragmentToken4791 =
  | FragmentSelf4791["__typename"]
  | FragmentSelf4791["typenameHint"] | FragmentToken4789 | FragmentToken4790;
