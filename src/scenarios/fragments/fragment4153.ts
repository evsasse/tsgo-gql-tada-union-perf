import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4151 } from "./fragment4151";
import type { FragmentToken4152 } from "./fragment4152";

export const FRAGMENT_4153 = gql(`
  fragment Fragment4153 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult4153 = ResultOf<typeof FRAGMENT_4153>;
type FragmentSelf4153 = NonNullable<FragmentResult4153>;

export type FragmentToken4153 =
  | FragmentSelf4153["__typename"]
  | FragmentSelf4153["typenameHint"] | FragmentToken4151 | FragmentToken4152;
