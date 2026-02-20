import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4623 } from "./fragment4623";
import type { FragmentToken4624 } from "./fragment4624";

export const FRAGMENT_4625 = gql(`
  fragment Fragment4625 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult4625 = ResultOf<typeof FRAGMENT_4625>;
type FragmentSelf4625 = NonNullable<FragmentResult4625>;

export type FragmentToken4625 =
  | FragmentSelf4625["__typename"]
  | FragmentSelf4625["typenameHint"] | FragmentToken4623 | FragmentToken4624;
