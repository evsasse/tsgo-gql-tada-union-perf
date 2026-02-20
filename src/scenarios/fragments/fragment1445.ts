import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1443 } from "./fragment1443";
import type { FragmentToken1444 } from "./fragment1444";

export const FRAGMENT_1445 = gql(`
  fragment Fragment1445 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult1445 = ResultOf<typeof FRAGMENT_1445>;
type FragmentSelf1445 = NonNullable<FragmentResult1445>;

export type FragmentToken1445 =
  | FragmentSelf1445["__typename"]
  | FragmentSelf1445["typenameHint"] | FragmentToken1443 | FragmentToken1444;
