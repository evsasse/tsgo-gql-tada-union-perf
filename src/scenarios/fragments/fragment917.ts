import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken915 } from "./fragment915";
import type { FragmentToken916 } from "./fragment916";

export const FRAGMENT_917 = gql(`
  fragment Fragment917 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult917 = ResultOf<typeof FRAGMENT_917>;
type FragmentSelf917 = NonNullable<FragmentResult917>;

export type FragmentToken917 =
  | FragmentSelf917["__typename"]
  | FragmentSelf917["typenameHint"] | FragmentToken915 | FragmentToken916;
