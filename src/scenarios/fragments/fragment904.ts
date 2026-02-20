import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken902 } from "./fragment902";
import type { FragmentToken903 } from "./fragment903";

export const FRAGMENT_904 = gql(`
  fragment Fragment904 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult904 = ResultOf<typeof FRAGMENT_904>;
type FragmentSelf904 = NonNullable<FragmentResult904>;

export type FragmentToken904 =
  | FragmentSelf904["__typename"]
  | FragmentSelf904["typenameHint"] | FragmentToken902 | FragmentToken903;
