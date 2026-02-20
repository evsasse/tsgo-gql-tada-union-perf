import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3294 } from "./fragment3294";
import type { FragmentToken3295 } from "./fragment3295";

export const FRAGMENT_3296 = gql(`
  fragment Fragment3296 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult3296 = ResultOf<typeof FRAGMENT_3296>;
type FragmentSelf3296 = NonNullable<FragmentResult3296>;

export type FragmentToken3296 =
  | FragmentSelf3296["__typename"]
  | FragmentSelf3296["typenameHint"] | FragmentToken3294 | FragmentToken3295;
