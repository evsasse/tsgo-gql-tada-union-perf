import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken766 } from "./fragment766";
import type { FragmentToken767 } from "./fragment767";

export const FRAGMENT_768 = gql(`
  fragment Fragment768 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult768 = ResultOf<typeof FRAGMENT_768>;
type FragmentSelf768 = NonNullable<FragmentResult768>;

export type FragmentToken768 =
  | FragmentSelf768["__typename"]
  | FragmentSelf768["typenameHint"] | FragmentToken766 | FragmentToken767;
