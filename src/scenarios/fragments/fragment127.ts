import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken125 } from "./fragment125";
import type { FragmentToken126 } from "./fragment126";

export const FRAGMENT_127 = gql(`
  fragment Fragment127 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult127 = ResultOf<typeof FRAGMENT_127>;
type FragmentSelf127 = NonNullable<FragmentResult127>;

export type FragmentToken127 =
  | FragmentSelf127["__typename"]
  | FragmentSelf127["typenameHint"] | FragmentToken125 | FragmentToken126;
