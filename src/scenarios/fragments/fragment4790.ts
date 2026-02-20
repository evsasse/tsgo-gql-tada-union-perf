import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4788 } from "./fragment4788";
import type { FragmentToken4789 } from "./fragment4789";

export const FRAGMENT_4790 = gql(`
  fragment Fragment4790 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult4790 = ResultOf<typeof FRAGMENT_4790>;
type FragmentSelf4790 = NonNullable<FragmentResult4790>;

export type FragmentToken4790 =
  | FragmentSelf4790["__typename"]
  | FragmentSelf4790["typenameHint"] | FragmentToken4788 | FragmentToken4789;
