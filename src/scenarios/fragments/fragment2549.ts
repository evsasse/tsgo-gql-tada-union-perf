import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2547 } from "./fragment2547";
import type { FragmentToken2548 } from "./fragment2548";

export const FRAGMENT_2549 = gql(`
  fragment Fragment2549 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult2549 = ResultOf<typeof FRAGMENT_2549>;
type FragmentSelf2549 = NonNullable<FragmentResult2549>;

export type FragmentToken2549 =
  | FragmentSelf2549["__typename"]
  | FragmentSelf2549["typenameHint"] | FragmentToken2547 | FragmentToken2548;
