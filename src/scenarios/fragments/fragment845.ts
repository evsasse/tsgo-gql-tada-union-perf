import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken843 } from "./fragment843";
import type { FragmentToken844 } from "./fragment844";

export const FRAGMENT_845 = gql(`
  fragment Fragment845 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult845 = ResultOf<typeof FRAGMENT_845>;
type FragmentSelf845 = NonNullable<FragmentResult845>;

export type FragmentToken845 =
  | FragmentSelf845["__typename"]
  | FragmentSelf845["typenameHint"] | FragmentToken843 | FragmentToken844;
