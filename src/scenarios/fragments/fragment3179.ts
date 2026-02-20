import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3177 } from "./fragment3177";
import type { FragmentToken3178 } from "./fragment3178";

export const FRAGMENT_3179 = gql(`
  fragment Fragment3179 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult3179 = ResultOf<typeof FRAGMENT_3179>;
type FragmentSelf3179 = NonNullable<FragmentResult3179>;

export type FragmentToken3179 =
  | FragmentSelf3179["__typename"]
  | FragmentSelf3179["typenameHint"] | FragmentToken3177 | FragmentToken3178;
