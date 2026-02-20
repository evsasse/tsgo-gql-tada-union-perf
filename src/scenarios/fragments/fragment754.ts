import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken752 } from "./fragment752";
import type { FragmentToken753 } from "./fragment753";

export const FRAGMENT_754 = gql(`
  fragment Fragment754 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult754 = ResultOf<typeof FRAGMENT_754>;
type FragmentSelf754 = NonNullable<FragmentResult754>;

export type FragmentToken754 =
  | FragmentSelf754["__typename"]
  | FragmentSelf754["typenameHint"] | FragmentToken752 | FragmentToken753;
