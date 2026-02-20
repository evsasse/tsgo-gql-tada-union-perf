import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4297 } from "./fragment4297";
import type { FragmentToken4298 } from "./fragment4298";

export const FRAGMENT_4299 = gql(`
  fragment Fragment4299 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult4299 = ResultOf<typeof FRAGMENT_4299>;
type FragmentSelf4299 = NonNullable<FragmentResult4299>;

export type FragmentToken4299 =
  | FragmentSelf4299["__typename"]
  | FragmentSelf4299["typenameHint"] | FragmentToken4297 | FragmentToken4298;
