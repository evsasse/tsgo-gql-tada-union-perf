import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3973 } from "./fragment3973";
import type { FragmentToken3974 } from "./fragment3974";

export const FRAGMENT_3975 = gql(`
  fragment Fragment3975 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult3975 = ResultOf<typeof FRAGMENT_3975>;
type FragmentSelf3975 = NonNullable<FragmentResult3975>;

export type FragmentToken3975 =
  | FragmentSelf3975["__typename"]
  | FragmentSelf3975["typenameHint"] | FragmentToken3973 | FragmentToken3974;
