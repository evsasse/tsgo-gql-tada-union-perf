import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken723 } from "./fragment723";
import type { FragmentToken724 } from "./fragment724";

export const FRAGMENT_725 = gql(`
  fragment Fragment725 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult725 = ResultOf<typeof FRAGMENT_725>;
type FragmentSelf725 = NonNullable<FragmentResult725>;

export type FragmentToken725 =
  | FragmentSelf725["__typename"]
  | FragmentSelf725["typenameHint"] | FragmentToken723 | FragmentToken724;
