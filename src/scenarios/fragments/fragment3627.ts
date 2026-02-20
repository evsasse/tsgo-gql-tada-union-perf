import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3625 } from "./fragment3625";
import type { FragmentToken3626 } from "./fragment3626";

export const FRAGMENT_3627 = gql(`
  fragment Fragment3627 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult3627 = ResultOf<typeof FRAGMENT_3627>;
type FragmentSelf3627 = NonNullable<FragmentResult3627>;

export type FragmentToken3627 =
  | FragmentSelf3627["__typename"]
  | FragmentSelf3627["typenameHint"] | FragmentToken3625 | FragmentToken3626;
