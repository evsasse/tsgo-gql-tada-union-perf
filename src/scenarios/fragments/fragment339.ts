import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken337 } from "./fragment337";
import type { FragmentToken338 } from "./fragment338";

export const FRAGMENT_339 = gql(`
  fragment Fragment339 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult339 = ResultOf<typeof FRAGMENT_339>;
type FragmentSelf339 = NonNullable<FragmentResult339>;

export type FragmentToken339 =
  | FragmentSelf339["__typename"]
  | FragmentSelf339["typenameHint"] | FragmentToken337 | FragmentToken338;
