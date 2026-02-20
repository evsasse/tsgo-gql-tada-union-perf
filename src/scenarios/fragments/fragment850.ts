import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken848 } from "./fragment848";
import type { FragmentToken849 } from "./fragment849";

export const FRAGMENT_850 = gql(`
  fragment Fragment850 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult850 = ResultOf<typeof FRAGMENT_850>;
type FragmentSelf850 = NonNullable<FragmentResult850>;

export type FragmentToken850 =
  | FragmentSelf850["__typename"]
  | FragmentSelf850["typenameHint"] | FragmentToken848 | FragmentToken849;
