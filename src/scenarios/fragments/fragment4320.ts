import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4318 } from "./fragment4318";
import type { FragmentToken4319 } from "./fragment4319";

export const FRAGMENT_4320 = gql(`
  fragment Fragment4320 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult4320 = ResultOf<typeof FRAGMENT_4320>;
type FragmentSelf4320 = NonNullable<FragmentResult4320>;

export type FragmentToken4320 =
  | FragmentSelf4320["__typename"]
  | FragmentSelf4320["typenameHint"] | FragmentToken4318 | FragmentToken4319;
