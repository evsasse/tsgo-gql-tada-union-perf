import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4624 } from "./fragment4624";
import type { FragmentToken4625 } from "./fragment4625";

export const FRAGMENT_4626 = gql(`
  fragment Fragment4626 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult4626 = ResultOf<typeof FRAGMENT_4626>;
type FragmentSelf4626 = NonNullable<FragmentResult4626>;

export type FragmentToken4626 =
  | FragmentSelf4626["__typename"]
  | FragmentSelf4626["typenameHint"] | FragmentToken4624 | FragmentToken4625;
