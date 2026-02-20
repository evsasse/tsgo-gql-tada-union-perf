import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken846 } from "./fragment846";
import type { FragmentToken847 } from "./fragment847";

export const FRAGMENT_848 = gql(`
  fragment Fragment848 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult848 = ResultOf<typeof FRAGMENT_848>;
type FragmentSelf848 = NonNullable<FragmentResult848>;

export type FragmentToken848 =
  | FragmentSelf848["__typename"]
  | FragmentSelf848["typenameHint"] | FragmentToken846 | FragmentToken847;
