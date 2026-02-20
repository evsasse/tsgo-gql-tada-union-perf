import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2460 } from "./fragment2460";
import type { FragmentToken2461 } from "./fragment2461";

export const FRAGMENT_2462 = gql(`
  fragment Fragment2462 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult2462 = ResultOf<typeof FRAGMENT_2462>;
type FragmentSelf2462 = NonNullable<FragmentResult2462>;

export type FragmentToken2462 =
  | FragmentSelf2462["__typename"]
  | FragmentSelf2462["typenameHint"] | FragmentToken2460 | FragmentToken2461;
