import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken113 } from "./fragment113";
import type { FragmentToken114 } from "./fragment114";

export const FRAGMENT_115 = gql(`
  fragment Fragment115 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult115 = ResultOf<typeof FRAGMENT_115>;
type FragmentSelf115 = NonNullable<FragmentResult115>;

export type FragmentToken115 =
  | FragmentSelf115["__typename"]
  | FragmentSelf115["typenameHint"] | FragmentToken113 | FragmentToken114;
