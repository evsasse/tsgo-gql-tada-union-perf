import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken722 } from "./fragment722";
import type { FragmentToken723 } from "./fragment723";

export const FRAGMENT_724 = gql(`
  fragment Fragment724 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult724 = ResultOf<typeof FRAGMENT_724>;
type FragmentSelf724 = NonNullable<FragmentResult724>;

export type FragmentToken724 =
  | FragmentSelf724["__typename"]
  | FragmentSelf724["typenameHint"] | FragmentToken722 | FragmentToken723;
