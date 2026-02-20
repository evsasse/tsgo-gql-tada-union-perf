import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken136 } from "./fragment136";
import type { FragmentToken137 } from "./fragment137";

export const FRAGMENT_138 = gql(`
  fragment Fragment138 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult138 = ResultOf<typeof FRAGMENT_138>;
type FragmentSelf138 = NonNullable<FragmentResult138>;

export type FragmentToken138 =
  | FragmentSelf138["__typename"]
  | FragmentSelf138["typenameHint"] | FragmentToken136 | FragmentToken137;
