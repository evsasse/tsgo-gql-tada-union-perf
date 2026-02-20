import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4843 } from "./fragment4843";
import type { FragmentToken4844 } from "./fragment4844";

export const FRAGMENT_4845 = gql(`
  fragment Fragment4845 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult4845 = ResultOf<typeof FRAGMENT_4845>;
type FragmentSelf4845 = NonNullable<FragmentResult4845>;

export type FragmentToken4845 =
  | FragmentSelf4845["__typename"]
  | FragmentSelf4845["typenameHint"] | FragmentToken4843 | FragmentToken4844;
