import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken192 } from "./fragment192";
import type { FragmentToken193 } from "./fragment193";

export const FRAGMENT_194 = gql(`
  fragment Fragment194 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult194 = ResultOf<typeof FRAGMENT_194>;
type FragmentSelf194 = NonNullable<FragmentResult194>;

export type FragmentToken194 =
  | FragmentSelf194["__typename"]
  | FragmentSelf194["typenameHint"] | FragmentToken192 | FragmentToken193;
