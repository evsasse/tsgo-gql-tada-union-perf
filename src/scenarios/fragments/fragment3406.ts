import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3404 } from "./fragment3404";
import type { FragmentToken3405 } from "./fragment3405";

export const FRAGMENT_3406 = gql(`
  fragment Fragment3406 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult3406 = ResultOf<typeof FRAGMENT_3406>;
type FragmentSelf3406 = NonNullable<FragmentResult3406>;

export type FragmentToken3406 =
  | FragmentSelf3406["__typename"]
  | FragmentSelf3406["typenameHint"] | FragmentToken3404 | FragmentToken3405;
