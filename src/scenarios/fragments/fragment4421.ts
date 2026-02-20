import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4419 } from "./fragment4419";
import type { FragmentToken4420 } from "./fragment4420";

export const FRAGMENT_4421 = gql(`
  fragment Fragment4421 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult4421 = ResultOf<typeof FRAGMENT_4421>;
type FragmentSelf4421 = NonNullable<FragmentResult4421>;

export type FragmentToken4421 =
  | FragmentSelf4421["__typename"]
  | FragmentSelf4421["typenameHint"] | FragmentToken4419 | FragmentToken4420;
