import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4149 } from "./fragment4149";
import type { FragmentToken4150 } from "./fragment4150";

export const FRAGMENT_4151 = gql(`
  fragment Fragment4151 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult4151 = ResultOf<typeof FRAGMENT_4151>;
type FragmentSelf4151 = NonNullable<FragmentResult4151>;

export type FragmentToken4151 =
  | FragmentSelf4151["__typename"]
  | FragmentSelf4151["typenameHint"] | FragmentToken4149 | FragmentToken4150;
