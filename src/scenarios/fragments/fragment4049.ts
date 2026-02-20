import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4047 } from "./fragment4047";
import type { FragmentToken4048 } from "./fragment4048";

export const FRAGMENT_4049 = gql(`
  fragment Fragment4049 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult4049 = ResultOf<typeof FRAGMENT_4049>;
type FragmentSelf4049 = NonNullable<FragmentResult4049>;

export type FragmentToken4049 =
  | FragmentSelf4049["__typename"]
  | FragmentSelf4049["typenameHint"] | FragmentToken4047 | FragmentToken4048;
