import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4780 } from "./fragment4780";
import type { FragmentToken4781 } from "./fragment4781";

export const FRAGMENT_4782 = gql(`
  fragment Fragment4782 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult4782 = ResultOf<typeof FRAGMENT_4782>;
type FragmentSelf4782 = NonNullable<FragmentResult4782>;

export type FragmentToken4782 =
  | FragmentSelf4782["__typename"]
  | FragmentSelf4782["typenameHint"] | FragmentToken4780 | FragmentToken4781;
