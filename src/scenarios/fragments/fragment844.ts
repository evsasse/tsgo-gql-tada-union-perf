import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken842 } from "./fragment842";
import type { FragmentToken843 } from "./fragment843";

export const FRAGMENT_844 = gql(`
  fragment Fragment844 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult844 = ResultOf<typeof FRAGMENT_844>;
type FragmentSelf844 = NonNullable<FragmentResult844>;

export type FragmentToken844 =
  | FragmentSelf844["__typename"]
  | FragmentSelf844["typenameHint"] | FragmentToken842 | FragmentToken843;
