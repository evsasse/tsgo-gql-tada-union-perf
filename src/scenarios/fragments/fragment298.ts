import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken296 } from "./fragment296";
import type { FragmentToken297 } from "./fragment297";

export const FRAGMENT_298 = gql(`
  fragment Fragment298 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult298 = ResultOf<typeof FRAGMENT_298>;
type FragmentSelf298 = NonNullable<FragmentResult298>;

export type FragmentToken298 =
  | FragmentSelf298["__typename"]
  | FragmentSelf298["typenameHint"] | FragmentToken296 | FragmentToken297;
