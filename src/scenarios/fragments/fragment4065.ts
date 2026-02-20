import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4063 } from "./fragment4063";
import type { FragmentToken4064 } from "./fragment4064";

export const FRAGMENT_4065 = gql(`
  fragment Fragment4065 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult4065 = ResultOf<typeof FRAGMENT_4065>;
type FragmentSelf4065 = NonNullable<FragmentResult4065>;

export type FragmentToken4065 =
  | FragmentSelf4065["__typename"]
  | FragmentSelf4065["typenameHint"] | FragmentToken4063 | FragmentToken4064;
