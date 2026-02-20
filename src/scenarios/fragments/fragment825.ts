import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken823 } from "./fragment823";
import type { FragmentToken824 } from "./fragment824";

export const FRAGMENT_825 = gql(`
  fragment Fragment825 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult825 = ResultOf<typeof FRAGMENT_825>;
type FragmentSelf825 = NonNullable<FragmentResult825>;

export type FragmentToken825 =
  | FragmentSelf825["__typename"]
  | FragmentSelf825["typenameHint"] | FragmentToken823 | FragmentToken824;
