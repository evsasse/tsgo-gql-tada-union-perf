import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3403 } from "./fragment3403";
import type { FragmentToken3404 } from "./fragment3404";

export const FRAGMENT_3405 = gql(`
  fragment Fragment3405 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult3405 = ResultOf<typeof FRAGMENT_3405>;
type FragmentSelf3405 = NonNullable<FragmentResult3405>;

export type FragmentToken3405 =
  | FragmentSelf3405["__typename"]
  | FragmentSelf3405["typenameHint"] | FragmentToken3403 | FragmentToken3404;
