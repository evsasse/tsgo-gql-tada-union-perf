import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2231 } from "./fragment2231";
import type { FragmentToken2232 } from "./fragment2232";

export const FRAGMENT_2233 = gql(`
  fragment Fragment2233 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult2233 = ResultOf<typeof FRAGMENT_2233>;
type FragmentSelf2233 = NonNullable<FragmentResult2233>;

export type FragmentToken2233 =
  | FragmentSelf2233["__typename"]
  | FragmentSelf2233["typenameHint"] | FragmentToken2231 | FragmentToken2232;
