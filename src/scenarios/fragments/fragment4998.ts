import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4996 } from "./fragment4996";
import type { FragmentToken4997 } from "./fragment4997";

export const FRAGMENT_4998 = gql(`
  fragment Fragment4998 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult4998 = ResultOf<typeof FRAGMENT_4998>;
type FragmentSelf4998 = NonNullable<FragmentResult4998>;

export type FragmentToken4998 =
  | FragmentSelf4998["__typename"]
  | FragmentSelf4998["typenameHint"] | FragmentToken4996 | FragmentToken4997;
