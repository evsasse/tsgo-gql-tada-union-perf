import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3402 } from "./fragment3402";
import type { FragmentToken3403 } from "./fragment3403";

export const FRAGMENT_3404 = gql(`
  fragment Fragment3404 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult3404 = ResultOf<typeof FRAGMENT_3404>;
type FragmentSelf3404 = NonNullable<FragmentResult3404>;

export type FragmentToken3404 =
  | FragmentSelf3404["__typename"]
  | FragmentSelf3404["typenameHint"] | FragmentToken3402 | FragmentToken3403;
