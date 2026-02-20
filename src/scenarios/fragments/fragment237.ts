import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken235 } from "./fragment235";
import type { FragmentToken236 } from "./fragment236";

export const FRAGMENT_237 = gql(`
  fragment Fragment237 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult237 = ResultOf<typeof FRAGMENT_237>;
type FragmentSelf237 = NonNullable<FragmentResult237>;

export type FragmentToken237 =
  | FragmentSelf237["__typename"]
  | FragmentSelf237["typenameHint"] | FragmentToken235 | FragmentToken236;
