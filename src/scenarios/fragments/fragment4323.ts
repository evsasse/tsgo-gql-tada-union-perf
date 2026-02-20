import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4321 } from "./fragment4321";
import type { FragmentToken4322 } from "./fragment4322";

export const FRAGMENT_4323 = gql(`
  fragment Fragment4323 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult4323 = ResultOf<typeof FRAGMENT_4323>;
type FragmentSelf4323 = NonNullable<FragmentResult4323>;

export type FragmentToken4323 =
  | FragmentSelf4323["__typename"]
  | FragmentSelf4323["typenameHint"] | FragmentToken4321 | FragmentToken4322;
