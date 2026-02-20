import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4799 } from "./fragment4799";
import type { FragmentToken4800 } from "./fragment4800";

export const FRAGMENT_4801 = gql(`
  fragment Fragment4801 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult4801 = ResultOf<typeof FRAGMENT_4801>;
type FragmentSelf4801 = NonNullable<FragmentResult4801>;

export type FragmentToken4801 =
  | FragmentSelf4801["__typename"]
  | FragmentSelf4801["typenameHint"] | FragmentToken4799 | FragmentToken4800;
