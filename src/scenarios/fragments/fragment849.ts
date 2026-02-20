import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken847 } from "./fragment847";
import type { FragmentToken848 } from "./fragment848";

export const FRAGMENT_849 = gql(`
  fragment Fragment849 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult849 = ResultOf<typeof FRAGMENT_849>;
type FragmentSelf849 = NonNullable<FragmentResult849>;

export type FragmentToken849 =
  | FragmentSelf849["__typename"]
  | FragmentSelf849["typenameHint"] | FragmentToken847 | FragmentToken848;
