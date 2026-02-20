import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4848 } from "./fragment4848";
import type { FragmentToken4849 } from "./fragment4849";

export const FRAGMENT_4850 = gql(`
  fragment Fragment4850 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult4850 = ResultOf<typeof FRAGMENT_4850>;
type FragmentSelf4850 = NonNullable<FragmentResult4850>;

export type FragmentToken4850 =
  | FragmentSelf4850["__typename"]
  | FragmentSelf4850["typenameHint"] | FragmentToken4848 | FragmentToken4849;
