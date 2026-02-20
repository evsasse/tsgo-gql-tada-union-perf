import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken259 } from "./fragment259";
import type { FragmentToken260 } from "./fragment260";

export const FRAGMENT_261 = gql(`
  fragment Fragment261 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult261 = ResultOf<typeof FRAGMENT_261>;
type FragmentSelf261 = NonNullable<FragmentResult261>;

export type FragmentToken261 =
  | FragmentSelf261["__typename"]
  | FragmentSelf261["typenameHint"] | FragmentToken259 | FragmentToken260;
