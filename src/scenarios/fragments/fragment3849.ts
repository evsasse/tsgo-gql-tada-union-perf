import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3847 } from "./fragment3847";
import type { FragmentToken3848 } from "./fragment3848";

export const FRAGMENT_3849 = gql(`
  fragment Fragment3849 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult3849 = ResultOf<typeof FRAGMENT_3849>;
type FragmentSelf3849 = NonNullable<FragmentResult3849>;

export type FragmentToken3849 =
  | FragmentSelf3849["__typename"]
  | FragmentSelf3849["typenameHint"] | FragmentToken3847 | FragmentToken3848;
